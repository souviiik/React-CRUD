import React, { Fragment, PureComponent } from 'react';
import {Helmet} from "react-helmet";

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Company name</title>
                </Helmet>
                <h1 className="my-5">Home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et tempor ipsum, maximus viverra neque. Morbi eros eros, sollicitudin non massa non, porttitor pretium ex. Nam feugiat, lacus a ullamcorper viverra, lacus ante bibendum ipsum, eget finibus diam ante at nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam malesuada molestie euismod. Cras lobortis scelerisque justo, vel fermentum nunc finibus non. Donec lobortis, velit eu egestas sollicitudin, enim neque luctus metus, eget consequat purus est sit amet orci. Pellentesque venenatis consequat nunc ut mollis. Ut id lorem fermentum erat lacinia rhoncus ac vel urna. Suspendisse purus justo, elementum a tortor non, consectetur varius sapien. Aenean scelerisque non mi quis malesuada. Mauris vitae porta neque. Fusce molestie fermentum nisl in tempus. Etiam in urna lectus. Pellentesque eu tortor purus.</p>

                <p>Donec eu tortor et massa semper varius. Sed vitae ipsum leo. Sed mollis elit eget neque sollicitudin commodo. Vestibulum at enim nisi. Praesent sit amet ipsum blandit, pretium ante eget, tempus velit. Morbi quis leo nisl. Cras et lacus massa. Phasellus rutrum sollicitudin arcu, ut vehicula odio tincidunt vel.</p>

                <p>Donec in enim augue. Vivamus felis ligula, gravida et interdum in, dignissim eu massa. Suspendisse eget nulla nulla. Nam accumsan viverra massa in dapibus. Proin vitae elit metus. Curabitur vel nisi eu lacus consectetur efficitur. Aliquam interdum erat eget ante mollis, a malesuada metus tincidunt. Pellentesque fermentum eleifend magna quis maximus. Proin sit amet magna lacus. Nulla at ex mauris. Nullam diam justo, dapibus ac cursus id, dictum eget lectus.</p>

                <p>Integer eleifend a metus vestibulum fringilla. Nunc vel auctor ligula, nec eleifend mauris. Donec dignissim lacus nisi, sed mattis mauris mattis id. Nunc vitae interdum purus. Quisque sit amet odio vel libero aliquet lobortis. Praesent eu posuere dolor. Pellentesque id felis eget turpis tincidunt sodales a id neque. Cras sit amet erat id lorem placerat condimentum. Nulla id nisi posuere mauris vulputate laoreet vel at elit. Aliquam erat volutpat. Nam cursus sollicitudin diam, nec tempor dolor mattis vel. Morbi mollis tristique nunc non finibus. Donec ultricies dui at nisl sodales blandit. Vivamus vel viverra urna.</p>

                <p>Sed tempor metus non pharetra cursus. Morbi tristique ornare leo a convallis. Maecenas pulvinar sodales metus, id tempor ipsum consequat id. Cras at libero quis diam consectetur gravida at id odio. Vivamus dignissim in lectus vulputate fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris id mattis tellus. Donec id mi quis nibh efficitur vehicula et a ante. Aliquam posuere ex a scelerisque ullamcorper. Etiam ipsum orci, ultrices sed porttitor ac, sagittis et nulla. Nullam rutrum efficitur enim, eu varius risus tincidunt sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nunc odio, lacinia at velit sagittis, maximus tempor nisl.</p>
            </Fragment>
        );
    }
}

export default Home;
