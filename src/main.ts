import * as PIXI from 'pixi.js'
(window as any).PIXI = PIXI;
import 'pixi-display'

window.addEventListener('DOMContentLoaded',()=>{
  var app = new (window as any).PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
  document.body.appendChild(app.view);

  // create a new Sprite from an image path
  var bunny = (window as any).PIXI.Sprite.fromImage('assets/img/bunny.png')

  // center the sprite's anchor point
  bunny.anchor.set(0.5);

  // move the sprite to the center of the screen
  bunny.x = app.screen.width / 2;
  bunny.y = app.screen.height / 2;

  app.stage.addChild(bunny);

  // Listen for animate update
  app.ticker.add(function(delta) {
      // just for fun, let's rotate mr rabbit a little
      // delta is 1 if running at 100% performance
      // creates frame-independent tranformation
      bunny.rotation += 0.1 * delta;
  });

});
