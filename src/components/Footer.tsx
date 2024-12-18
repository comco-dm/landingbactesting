import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Container } from './layout/Container';
import { 
  COMPANY_NAME, 
  COMPANY_DESCRIPTION, 
  COPYRIGHT_NOTICE,
  SOCIAL_LINKS 
} from '../constants/company';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">{COMPANY_NAME}</h3>
            <p className="text-gray-400 mb-4">{COMPANY_DESCRIPTION}</p>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Follow us on X (formerly Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Visit our GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>{COPYRIGHT_NOTICE}</p>
        </div>
      </Container>
    </footer>
  );
}