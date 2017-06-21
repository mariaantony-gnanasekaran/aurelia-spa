export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.options.pushState = true;
    config.options.root = '/aurelia-spa/';
    config.map([
      { route: ['', 'first'], name: 'first',      moduleId: 'first',      nav: true, title: 'first' },
      { route: 'second',  name: 'second', moduleId: 'second', nav: true, title: 'second' }
    ]);

    this.router = router;
  }
}
