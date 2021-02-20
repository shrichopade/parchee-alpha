import AnimatedMultistep from "react-native-animated-multistep";

/* Define the steps  */

import CapturePrescription from "./UploadPrescription/CapturePrescription";
import UploadPrescription from "./UploadPrescription/UploadPrescription";
import ConfirmPrescription from "./UploadPrescription/ConfirmPrescription";
// import Step4 from "./steps/step4";

const allSteps = [
  { name: "step 1", component: CapturePrescription },
  { name: "step 2", component: UploadPrescription },
//   { name: "step 3", component: Step3 },
  { name: "step 4", component: ConfirmPrescription }
];

/* Define your class */
export default class App extends Component {
  /* define the method to be called when you go on next step */

  onNext = () => {
    console.log("Next");
  };

  /* define the method to be called when you go on back step */

  onBack = () => {
    console.log("Back");
  };

  /* define the method to be called when the wizard is finished */

  finish = finalState => {
    console.log(finalState);
  };

  /* render MultiStep */
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AnimatedMultistep
          steps={allSteps}
          onFinish={this.finish}
          onBack={this.onBack}
          onNext={this.onNext}
          comeInOnNext="bounceInUp"
          OutOnNext="bounceOutDown"
          comeInOnBack="bounceInDown"
          OutOnBack="bounceOutUp"
        />
      </View>
    );
  }
}