import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import DrawerButton from "./Common/DrawerButton";
import { connect } from "react-redux";
import TextinputCommon from "./Common/TextinputCommon";
import TextCommon from "../Components/Common/TextCommon";
import global from "./Common/global";
import { nameChangeLogin, nameErrorChangeLogin, jobChangeLogin, jobErrorChangeLogin, getApiCall } from "../Actions";

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text style={styles.HederText}>Home Page</Text>,
      headerLeft: <DrawerButton text={""} onPress={() => navigation.goBack()} />
      //   headerRight: <BackButton text={""} onPress={navigation.getParam('infoPressed')} />,
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.navigation.setParams({ infoPressed: this.infoPressed.bind(this) });
  }
  infoPressed() {
    console.log("Hello");
  }
  focusNextField(nextField) {
    this.refs[nextField].focus();
  }

  onNameChange(text) {
    this.props.nameChangeLogin(text);
  }
  onJobChange(text) {
    this.props.jobChangeLogin(text);
  }

  onButtonPress() {
    const { name, job } = this.props;
    let isValid = true;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name === "") {
      isValid = false;
      this.props.nameErrorChangeLogin("Enter name");
    }
    if (job === "") {
      isValid = false;
      this.props.jobErrorChangeLogin("Enter job");
    } else {
      this.props.jobErrorChangeLogin("");
    }
    if (isValid === true) {
      this.props.getApiCall(name, job);
    }
  }

  render() {
    return (
      <View style={styles.maincontener}>
        <TextinputCommon
          returnKeyType="next"
          ref="1"
          value={this.props.name}
          onChangeText={this.onNameChange.bind(this)}
          placeholder={"Name"}
          onSubmitEditing={() => this.focusNextField("2")}
        />
        <TextCommon allowFontScaling={false} text={this.props.nameError} />
        <TextinputCommon returnKeyType="next" ref="2" value={this.props.job} onChangeText={this.onJobChange.bind(this)} placeholder={"Job"} />
        <TextCommon allowFontScaling={false} text={this.props.jobError} />

        <Button title={"Click"} style={styles.input} onPress={this.onButtonPress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HederText: {
    color: global.black,
    fontSize: global.fontSize_20
  },
  maincontener: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return {
    name: state.Home.name,
    nameError: state.Home.nameError,
    job: state.Home.job,
    jobError: state.Home.jobError,
    isLoading: state.Home.isLoading
  };
};
export default connect(
  mapStateToProps,
  {
    nameChangeLogin,
    nameErrorChangeLogin,
    jobChangeLogin,
    jobErrorChangeLogin,
    getApiCall
  }
)(Home);
