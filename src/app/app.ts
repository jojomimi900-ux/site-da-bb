import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Principles } from './components/principles/principles';
import { History } from './components/history/history';
import { Products } from './components/products/products';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    Hero,
    Principles,
    History,
    Products,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'Sanitexx - Saneantes de Alta Performance';
}
