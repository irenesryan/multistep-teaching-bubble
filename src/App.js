import './App.css';
import * as React from 'react';
import { DefaultButton, TeachingBubble, DirectionalHint } from '@fluentui/react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showTeachingBubble1: false,
      showTeachingBubble2: false,
      showTeachingBubble3: false,
      showTeachingBubble4: false
    }    
  }

  render() {
    const buttonId = 'teaching-bubble';
    const styles = {
      footer: {
        [`& > .ms-StackItem`]: {
          display: 'flex',
          flexDirection: 'row-reverse',
        },
        [`& > .ms-StackItem > .ms-Button:not(:first-child)`]: {
          margin: '0 15px 0 0',
        },
      },
    };
    
    return (
      <div>
        <h3>Teaching Bubble for <u>Caradoc Viewer Application</u> Walkthrough</h3>
        <DefaultButton
          style={{ marginTop: '50px', marginLeft: '50px' }}
          id={buttonId}
          onClick={() => this.setState({ showTeachingBubble1: true })}
          text={this.state.showTeachingBubble1 ? 'Hide Teaching Bubble' : 'Show Teaching Bubble'}
        /> 

        {this.state.showTeachingBubble1 && (
          <div className="ms-Callout-container">
            <TeachingBubble
              target={`#${buttonId}`}
              // onDismiss={() => this.setState({ showTeachingBubble1: false })}
              directionalHint={DirectionalHint.bottomCenter}
              primaryButtonProps={{ children: 'Next', onClick: () => this.setState({ showTeachingBubble2: true, showTeachingBubble1: false }) }}
              secondaryButtonProps={{ children: 'May be Later', onClick: () => this.setState({ showTeachingBubble1: false }) }}
              footerContent="1 of 4"
              styles={styles}
              hasCloseButton={true}
              closeButtonAriaLabel="Close"
            >
              <div>
                <h3>Discover what’s trending around you</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam
                  magni harum non?
                </p>
              </div>
            </TeachingBubble>
          </div>
        )}
        {this.state.showTeachingBubble2 && (
          <div className="ms-Callout-container">
            <TeachingBubble
              target={`#${buttonId}`}
              // onDismiss={() => this.setState({ showTeachingBubble2: false, showTeachingBubble1: false })}
              directionalHint={DirectionalHint.bottomCenter}
              primaryButtonProps={{ children: 'Next', onClick: () => this.setState({ showTeachingBubble2: false, showTeachingBubble3: true }) }}
              secondaryButtonProps={{ children: 'Previous', onClick: () => this.setState({ showTeachingBubble2: false, showTeachingBubble1: true }) }}
              footerContent="2 of 4"
              styles={styles}
            >
              <div>
                <h3>Discover what’s trending around you</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam
                  magni harum non?
                </p>
              </div>
            </TeachingBubble>
          </div>
        )}
        {this.state.showTeachingBubble3 && (
          <div className="ms-Callout-container">
            <TeachingBubble
              target={`#${buttonId}`}
              // onDismiss={() => this.setState({ showTeachingBubble3: false, showTeachingBubble2: false, showTeachingBubble1: false })}
              directionalHint={DirectionalHint.bottomCenter}
              primaryButtonProps={{ children: 'Next', onClick: () => this.setState({ showTeachingBubble3: false, showTeachingBubble4: true }) }}
              secondaryButtonProps={{ children: 'Previous', onClick: () => this.setState({ showTeachingBubble3: false, showTeachingBubble2: true }) }}
              footerContent="3 of 4"
              styles={styles}
            >
              <div>
                <h3>Discover what’s trending around you</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam
                  magni harum non?
                </p>
              </div>
            </TeachingBubble>
          </div>
        )}
         {this.state.showTeachingBubble4 && (
          <div className="ms-Callout-container">
            <TeachingBubble
              target={`#${buttonId}`}
              // onDismiss={() => this.setState({ showTeachingBubble4: false, showTeachingBubble3: false, showTeachingBubble2: false, showTeachingBubble1: false })}
              directionalHint={DirectionalHint.bottomCenter}
              primaryButtonProps={{ children: 'Close', onClick: () => this.setState({ showTeachingBubble4: false }) }}
              secondaryButtonProps={{ children: 'Previous', onClick: () => this.setState({ showTeachingBubble4: false, showTeachingBubble3: true }) }}
              footerContent="4 of 4"
              styles={styles}
            >
              <div>
                <h3>Discover what’s trending around you</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam
                  magni harum non?
                </p>
              </div>
            </TeachingBubble>
          </div>
        )}
      </div>
    );
  }
}
export default App;