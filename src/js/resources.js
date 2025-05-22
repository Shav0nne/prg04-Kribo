import { ImageSource, Resource, Loader, Sound } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Kribo: new ImageSource('images/kribo.png'),
    // Kriboafk: new ImageSource('images/kriboafk.png'),
    Bean: new ImageSource('images/bean.png'),
    BgHappy: new ImageSource('images/backgroundhappy.jpeg'),
    Block: new ImageSource('images/block.png'),
    Thorn: new ImageSource('images/thorn.png'),
    KriboHappyLand: new Sound ('sounds/KriboHappyLand.mp3')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }