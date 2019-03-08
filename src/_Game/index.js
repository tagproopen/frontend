import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gameNotInited } from 'services/gameUI/actions';

const mapStateToProps = (state) => {
  return state.gameUI;
};

const mapDispatchToProps = dispatch => ({
    gameNotInited: () => dispatch(gameNotInited()),
});

const PIXI = window.PIXI;
const Box2D = window.Box2D;
class index extends Component {
  componentDidMount() {
    if (!this.props.initGame) {
      this.props.gameNotInited();
    }
    console.log('test', Box2D);
    // let type = "WebGL";
    // if (!PIXI.utils.isWebGLSupported()) {
    //   type = "canvas";
    // }

    // const bodiesArray = [];
    // const spritesArray = [];

    // // your render function checks the position and rotation of the box2d bodies, and applies it to the sprites array. let me know if you need a code example

    // PIXI.utils.sayHello(type);

    // //Create a Pixi Application
    // let app = new PIXI.Application({
    //   width: 800,         // default: 800
    //   height: 600,        // default: 600
    //   antialias: true,    // default: false
    //   transparent: false, // default: false
    //   resolution: 1       // default: 1
    // });


    // //Add the canvas that Pixi automatically created for you to the HTML document
    // // document.body.appendChild(app.view);

    // app.view.style.position = 'absolute';
    // app.view.style.left = '50%';
    // app.view.style.top = '50%';
    // app.view.style.transform = 'translate3d( -50%, -50%, 0 )';
    // // app.renderer.resize(window.innerWidth, window.innerHeight);

    // let Application = PIXI.Application,
    //   loader = PIXI.loader,
    //   resources = PIXI.loader.resources,
    //   TextureCache = PIXI.utils.TextureCache,
    //   Circle = PIXI.Circle,
    //   Sprite = PIXI.Sprite;

    // loader
    //   .add("images/tiles.png")
    //   .load(setup);

    // //This `setup` function will run when the image has loaded
    // function setup() {

    //   //Create the cat sprite
    //   let texture = TextureCache["images/tiles.png"];
    //   let circle = new PIXI.Circle(580, 20, 19);
    //   texture.frame = circle;
    //   let cat = new Sprite(texture);

    //   // cat.width = 80;
    //   // cat.height = 120; 
    //   //Add the cat to the stage
    //   app.stage.addChild(cat);

    //   app.renderer.render(app.stage);
    // }

    // let requestAnimFrame = (function () {
    //   return window.requestAnimationFrame ||
    //     window.webkitRequestAnimationFrame ||
    //     window.mozRequestAnimationFrame ||
    //     window.oRequestAnimationFrame ||
    //     window.msRequestAnimationFrame ||
    //     function (/* function */ callback, /* DOMElement */ element) {
    //       window.setTimeout(callback, 1000 / 60);
    //     };
    // })();

    // var canvas = document.getElementById("c");
    // var ctx = canvas.getContext("2d");

    // var world;

    // function init() {
    //   var b2Vec2 = Box2D.Common.Math.b2Vec2
    //     , b2BodyDef = Box2D.Dynamics.b2BodyDef
    //     , b2Body = Box2D.Dynamics.b2Body
    //     , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    //     , b2Fixture = Box2D.Dynamics.b2Fixture
    //     , b2World = Box2D.Dynamics.b2World
    //     , b2MassData = Box2D.Collision.Shapes.b2MassData
    //     , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    //     , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
    //     , b2DebugDraw = Box2D.Dynamics.b2DebugDraw
    //     ;

    //   world = new b2World(
    //     new b2Vec2(0, 10)    //gravity
    //     , true                 //allow sleep
    //   );

    //   var SCALE = 30;

    //   var fixDef = new b2FixtureDef;
    //   fixDef.density = 1.0;
    //   fixDef.friction = 0.5;
    //   fixDef.restitution = 0.2;

    //   var bodyDef = new b2BodyDef;

    //   //create ground
    //   bodyDef.type = b2Body.b2_staticBody;

    //   // positions the center of the object (not upper left!)
    //   bodyDef.position.x = canvas.width / 2 / SCALE;
    //   bodyDef.position.y = canvas.height / SCALE;

    //   fixDef.shape = new b2PolygonShape;

    //   // half width, half height. eg actual height here is 1 unit
    //   fixDef.shape.SetAsBox((600 / SCALE) / 2, (10 / SCALE) / 2);
    //   world.CreateBody(bodyDef).CreateFixture(fixDef);

    //   //create some objects
    //   bodyDef.type = b2Body.b2_dynamicBody;
    //   for (var i = 0; i < 150; ++i) {
    //     if (Math.random() > 0.5) {
    //       fixDef.shape = new b2PolygonShape;
    //       fixDef.shape.SetAsBox(
    //         Math.random() + 0.1 //half width
    //         , Math.random() + 0.1 //half height
    //       );
    //     } else {
    //       fixDef.shape = new b2CircleShape(
    //         Math.random() + 0.1 //radius
    //       );
    //     }
    //     bodyDef.position.x = Math.random() * 25;
    //     bodyDef.position.y = Math.random() * 10;
    //     world.CreateBody(bodyDef).CreateFixture(fixDef);
    //   }

    //   //setup debug draw
    //   var debugDraw = new b2DebugDraw();
    //   debugDraw.SetSprite(document.getElementById("c").getContext("2d"));
    //   debugDraw.SetDrawScale(SCALE);
    //   debugDraw.SetFillAlpha(0.3);
    //   debugDraw.SetLineThickness(1.0);
    //   debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
    //   world.SetDebugDraw(debugDraw);

    //   setTimeout(init, 6000);
    // }; // init()

    // function update() {
    //   world.Step(
    //     1 / 60   //frame-rate
    //     , 10       //velocity iterations
    //     , 10       //position iterations
    //   );
    //   world.DrawDebugData();
    //   world.ClearForces();

    //   requestAnimFrame(update);
    // }; // update()

    // init();
    // requestAnimFrame(update);
    // if (!this.props.isAuthed) {
    //   this.props.history.push('/');
    // }
  }

  render() {
    return null;
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(index);