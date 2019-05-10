import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera, Permissions } from "expo";

export class CameraScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between"
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Flip{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={() => {
                  if (this.camera) {
                    this.camera.takePictureAsync().then(photo => {
                      // TODO Should we should improve navigation so we don't backtrack to this screen later?
                      // Also this is slow to execute, we should display some user feedback first
                      this.props.navigation.navigate("PhotoConfirm", {
                        photo: photo,
                        photoid: this.props.navigation.getParam(
                          "photoid",
                          "NO-ID"
                        )
                      });
                    });
                  }
                }}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Snap{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
