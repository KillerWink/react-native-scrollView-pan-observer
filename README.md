# react-native-scrollView-pan-observer
Component to observe and capture scroll &amp; pan on react native scrollView

<strong>react-native-scrollView-pan-observer</strong> is a component that wraps a ScrollView and intercepts the panning inside the wrapped ScrollView component.

The results of panning the y-axis of the ScrollView are stored as state inside the PanContext, This state can be accessed Via the context inside your code.

The component makes use of the <a href="https://software-mansion.github.io/react-native-gesture-handler/">React Native Gesture Handler</a> which is a great component that bypasses the bridge between the native and JS domains, This allows for faster and smoother pan events.

# How to install

<code>
  npm i -save @killerwink/react-native-scrollView-pan-observer
</code>

<strong> Note! </strong>
If you are <strong> Not </strong> using expo, in addition to the above installation instructions please follow the installation instructions for the React Native Gesture Handler <a href="https://software-mansion.github.io/react-native-gesture-handler/">Here</a>

# How to use

Import the utility into your file.

```javascript
  import { PanProvider, usePanAnimation,  ScrollContainer } from '@killerwink/react-native-scrollView-pan-observer';
```

Wrap your app in the PanContext Wherever you need the Pan data


```javascript
  <MyApp>
    <PanProvider>
        <ScrollScreen /> 
    </PanProvider>     
  </MyApp>
```

Wrap you ScrollView & observe the users Pan

```javascript
const ScrollScreen = () => {

const { panDistance, panReleased } = usePanAnimation();

useEffect(() => {
        console.log(panDistance); // show me the pad distance along the y-axis
}, [panDistance]);

useEffect(() => {
        console.log(panReleased); // show me when the user has released the touch event
}, [panReleased]);

return (
  <ScrollContainer>
        <ScrollView>
            <Text> a list item </Text>
            <Text> a list item </Text>
            <Text> a list item </Text>
            <Text> a list item </Text>
        </ScrollView>
  </ScrollContainer>
  );
}
```

# Example Code

```javascript
import React from 'react';
import { ScrollView, View } from 'react-native';
import { PanProvider, usePanAnimation,  ScrollContainer } from '@killerwink/react-native-scrollView-pan-observer';

const ScrollScreen = () => {

const { panDistance, panReleased } = usePanAnimation();

useEffect(() => {
        console.log(panDistance); // show me the pad distance along the y-axis
}, [panDistance]);

useEffect(() => {
        console.log(panReleased); // show me when the user has released the touch event
}, [panReleased]);

return (
  <ScrollContainer>
        <ScrollView>
            <Text> a list item </Text>
            <Text> a list item </Text>
            <Text> a list item </Text>
            <Text> a list item </Text>
        </ScrollView>
  </ScrollContainer>
  );
};

export const TopLevelScreen = () => {
    return (
         <View>
           <PanProvider>
             <ScrollScreen /> 
           </PanProvider>     
         </View>
    );
};

```
