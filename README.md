
![title|small](ss.png)

This is the ScreenShot of how the component will look like.

# REACT-NATIVE-PERCENTAGE-RECTANGLE

React-Native-Percentage-Reactangle is a component which let you define your percent and draw the rectangle with image inside it.And also you can use it as a progress bar.And you can show percent if you won't specify the image.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/react-native-percentage-reactangle) to install React-Native-Percentage-Reactangle.

```bash
npm install React-Native-Percentage-Reactangle
```

## Usage

```python
import PercentageBar from 'react-native-percentage-reactangle';
 '//with the source of image imported from directory'
       <PercentageBar 
        source={demoImg} 
        width={100}
        percent={45}
        borderWidth={5}
        />
'//without the image source it will show you the percent inside it'
        <PercentageBar 
        width={150}
        percent={20}
        borderWidth={10}
        />
'//with the uri source of image '
        <PercentageBar 
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}  
        width={30}
        percent={80}
        borderWidth={2}
        />
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)