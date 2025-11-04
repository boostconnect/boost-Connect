import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User } from "@supabase/supabase-js";
import { Trash2 } from "lucide-react";

interface Service {
  id: string;
  platform: string;
  service_name: string;
  description: string;
  price: string;
  features: string[];
  quality: string;
  countries: string;
  speed: string;
}

const AdminPanel = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([]);
  
  const [formData, setFormData] = useState({
    platform: "",
    service_name: "",
    description: "",
    price: "",
    features: "",
    quality: "",
    countries: "",
    speed: "",
  });

  useEffect(() => {
    checkAuth();
    fetchServices();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      navigate("/auth");
      return;
    }

    setUser(user);
    // Check if the user has an admin role. If not, we won't redirect away
    // so we can show a helpful UI explaining how to request access.
    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .single();

    if (!roleData) {
      // Not an admin. Leave isAdmin as false and stop loading so UI can render instructions.
      setIsAdmin(false);
      setLoading(false);
      return;
    }

    setIsAdmin(true);
    setLoading(false);
  };

  const fetchServices = async () => {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load services");
    } else {
      setServices(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const features = formData.features.split("\n").filter(f => f.trim());

    const { error } = await supabase.from("services").insert({
      platform: formData.platform,
      service_name: formData.service_name,
      description: formData.description,
      price: formData.price,
      features,
      quality: formData.quality,
      countries: formData.countries,
      speed: formData.speed,
    });

    if (error) {
      toast.error("Failed to add service");
    } else {
      toast.success("Service added successfully!");
      setFormData({
        platform: "",
        service_name: "",
        description: "",
        price: "",
        features: "",
        quality: "",
        countries: "",
        speed: "",
      });
      fetchServices();
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("services").delete().eq("id", id);

    if (error) {
      toast.error("Failed to delete service");
    } else {
      toast.success("Service deleted successfully!");
      fetchServices();
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAdmin) {
    // Show a user-friendly access denied panel with next steps instead of redirecting.
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Navbar />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="p-8 border rounded-lg shadow-sm bg-background">
              <h2 className="text-2xl font-semibold mb-4">Access denied</h2>
              <p className="mb-4">Admin privileges are required to access this page.</p>
              <p className="mb-4">If you believe you should have access, ask an existing admin to promote your account.</p>
              <p className="mb-4">You can also run the SQL from <code>sql/grant_admin.sql</code> in the Supabase SQL editor to grant admin role to your user.</p>
              <div className="flex gap-2">
                <a
                  href={`mailto:boost1connect@gmail.com?subject=Request%20Admin%20Access&body=Please%20grant%20admin%20to%20the%20user%20with%20id:%20${user?.id}%20and%20email:%20${user?.email}`}
                  className="inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium bg-primary text-primary-foreground"
                >
                  Request Admin Access
                </a>
                <a
                  href="https://app.supabase.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium"
                >
                  Open Supabase
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Admin Panel</h1>
            <Button onClick={handleSignOut} variant="outline">
              Sign Out
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Add New Service</CardTitle>
              <CardDescription>Add a new service to your platform</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="platform">Platform</Label>
                    <Input
                      id="platform"
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                      placeholder="e.g., X (Twitter)"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service_name">Service Name</Label>
                    <Input
                      id="service_name"
                      value={formData.service_name}
                      onChange={(e) => setFormData({ ...formData, service_name: e.target.value })}
                      placeholder="e.g., Premium Followers"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Service description"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="Starting from $X"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="quality">Quality</Label>
                    <Input
                      id="quality"
                      value={formData.quality}
                      onChange={(e) => setFormData({ ...formData, quality: e.target.value })}
                      placeholder="e.g., High Quality"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="countries">Countries</Label>
                    <Input
                      id="countries"
                      value={formData.countries}
                      onChange={(e) => setFormData({ ...formData, countries: e.target.value })}
                      placeholder="e.g., Worldwide"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="speed">Speed</Label>
                    <Input
                      id="speed"
                      value={formData.speed}
                      onChange={(e) => setFormData({ ...formData, speed: e.target.value })}
                      placeholder="e.g., 1000/day"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="features">Features (one per line)</Label>
                  <Textarea
                    id="features"
                    value={formData.features}
                    onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                    placeholder="Real followers&#10;Instant delivery&#10;24/7 Support"
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Add Service
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Services</CardTitle>
              <CardDescription>Manage your services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">No services added yet</p>
                ) : (
                  services.map((service) => (
                    <div
                      key={service.id}
                      className="flex justify-between items-start p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">
                          {service.platform} - {service.service_name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                        <p className="text-sm font-medium mt-2">{service.price}</p>
                      </div>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(service.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPanel;
