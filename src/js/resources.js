import { ImageSource, Resource, Loader, Sound, ImageWrapping} from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Kribo: new ImageSource('images/kribo.png'),
    // Kriboafk: new ImageSource('images/kriboafk.png'),
    Lives : new ImageSource('images/lives.png', { wrapping: ImageWrapping.Repeat}),
    Bean: new ImageSource('images/bean.png'),
    Star: new ImageSource('images/star.png'),
    BgHappy: new ImageSource('images/backgroundhappy.jpeg'),
    Block: new ImageSource('images/block.png'),
    Thorn: new ImageSource('images/thorn.png'),
    Platform: new ImageSource('images/platform.png'),
    Shadow: new ImageSource('images/shadow.png'),
    KriboHappyLand: new Sound ('sounds/KriboHappyLand.mp3')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }