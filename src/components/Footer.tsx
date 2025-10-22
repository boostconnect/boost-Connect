const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Social Growth. All rights reserved.</p>
          <p className="text-sm mt-2">Powered by Web3 • Payments via USDT & USDC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
