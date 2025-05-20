import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Kribo: new ImageSource('images/kribo.jpeg'),
    BgHappy: new ImageSource('images/backgroundhappy.jpeg'),
    Block: new ImageSource('images/block.png'),
    KriboHappyLandSong: new Sound ('audio/KriboHappyLand.mp3')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }