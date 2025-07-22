import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage-ai-solutions-platform', icon: 'Home' },
    { name: 'Services', path: '/ai-services-ecosystem', icon: 'Layers' },
//     { name: 'Demo Lab', path: '/interactive-demo-lab', icon: 'Zap' },
    { name: 'Knowledge', path: '/ai-knowledge-center-blog-resources', icon: 'BookOpen' },
//     { name: 'About', path: '/company-universe-about-team', icon:vipin'Users' },
    { name: 'Contact', path: '/contact-consultation-hub', icon: 'MessageCircle' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'glass-effect shadow-elevated' : 'bg-dark backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/homepage-ai-solutions-platform"
            className="flex items-center space-x-3 hover-lift"
            onClick={closeMenu}
          >
            <div className="relative">
{/*               <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center animate-float"> */}
{/*                   <img */}
{/*               src={botImage} */}
{/*               alt="AI Bot" */}
{/*               className="w-10 h-10 object-cover rounded-full" */}
{/*             /> */}
                  <Icon name="Bot" size={24} color="white" strokeWidth={2.5} />
{/*              </div> */}
{/*               <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div> */}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">GiVi</span>
{/*               <span className="text-xs text-muted-foreground -mt-1">AI Solutions</span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth hover:bg-muted/50 ${
                  isActivePath(item.path)
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
{/*           <div className="hidden lg:flex items-center space-x-4"> */}
{/*             <Button  */}
{/*               variant="outline"  */}
{/*               size="sm" */}
{/*               iconName="Calendar" */}
{/*               iconPosition="left" */}
{/*               className="hover-glow" */}
{/*             > */}
{/*               Schedule Demo */}
{/*             </Button> */}
{/*             <Button  */}
{/*               variant="default"  */}
{/*               size="sm" */}
{/*               iconName="ArrowRight" */}
{/*               iconPosition="right" */}
{/*               className="btn-primary" */}
{/*             > */}
{/*               Get Started */}
{/*             </Button> */}
{/*           </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-smooth"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="transition-smooth"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-smooth overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 border-t border-border bg-black shadow-2xl">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-smooth ${
                    isActivePath(item.path)
                      ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-6 space-y-3">
              {/* <Button
                variant="outline"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                onClick={closeMenu}
              >
                Schedule Demo
              </Button> */}
              <Button
                variant="default"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                className="btn-primary"
                onClick={closeMenu}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;