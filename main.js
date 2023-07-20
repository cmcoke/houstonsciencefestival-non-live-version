import './style.css'

class MobileMenu {
  constructor() {
    this.button = document.querySelector('#header__mobile-menu-icon');
    this.container = document.querySelector('#header__container');
    this.navigation = document.querySelector('#navigation');
    this.socialMedia = document.querySelector('#header__social-media');
    this.mobileMenuIcon = document.querySelector('#header__mobile-menu-icon img');
    this.body = document.querySelector('body');
    this.events();
  }

  events() {
    this.button.addEventListener('click', () => this.openMenu());
  }

  openMenu() {
    this.container.classList.toggle('overlay');
    if (this.container.classList.contains('overlay')) {
      this.mobileMenuIcon.src = '/images/header/close.webp';
      this.body.classList.add('no-scroll');
      this.navigation.classList.remove('hidden');
      this.socialMedia.classList.remove('hidden');
      this.navigation.classList.add('block');
      this.socialMedia.classList.add('block');
    } else {
      this.mobileMenuIcon.src = '/images/header/hamburger-menu.webp';
      this.body.classList.remove('no-scroll');
      this.navigation.classList.remove('block');
      this.socialMedia.classList.remove('block');
      this.navigation.classList.add('hidden');
      this.socialMedia.classList.add('hidden');
    }
  }
}

const mobileMenu = new MobileMenu();
