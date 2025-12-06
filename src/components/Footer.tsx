const Footer = () => {
  return <footer className="py-12 bg-tertiary text-primary border-t border-secondary/30 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4 text-primary">
                Takāmul Cup
              </h3>
              <p className="text-sm text-primary/80 leading-relaxed">
                UAE's premier integration competition celebrating mathematical excellence and strategic problem-solving.
              </p>
            </div>

            {/* Leadership Section */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4 text-primary">
                Leadership
              </h3>
              <p className="text-sm font-semibold text-primary/95 mb-1">
                Dr. Dania Zantout
              </p>
              <p className="text-xs text-primary/70 mb-2">
                Founding and Executive Director
              </p>
              <p className="text-xs text-primary/70">
                Math Program, Division of Science
              </p>
              <p className="text-xs text-primary/70">
                NYU Abu Dhabi
              </p>
            </div>

            {/* Contact Section */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-4 text-primary">
            </h3>
              <p className="text-sm text-primary/80 mb-2">
            </p>
              <p className="text-xs text-primary/70">
            </p>
              <p className="text-xs text-primary/70">
            </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/20 pt-6 mt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-primary/60 text-center md:text-left">
                © 2025 Takāmul Cup. All rights reserved.
              </p>
              <p className="text-xs text-primary/60 text-center md:text-right">
                In collaboration with NYU Abu Dhabi Math SIG
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;