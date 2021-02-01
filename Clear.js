import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import styles from './PopupStyles';

export default class Clear extends Component {
    render() {
        return (
            <View style={styles.clearScreen}>
                <View style={styles.clearedLevelContainer}>
                    <Text style={styles.clearedLevelText}>Level</Text>
                    <Text style={styles.clearedLevelText}>{this.props.level}</Text>
                </View>

                <View style={styles.panel}>
                    {
                        this.props.score >= this.props.level && <Text style={styles.panelTitle}>Cleared</Text>
                    }
                    {
                        this.props.score < this.props.level && <Text style={styles.panelTitle}>Game over</Text>
                    }
                    <Text style={styles.panelText}>Score: {this.props.score}</Text>

                    <View style={styles.panelButtonsContainer}>
                        <TouchableWithoutFeedback onPress={this.props.onReset}>
                            <View style={styles.panelButton}>
                                <Image style={styles.panelButtonIcon} resizeMode="contain" source={Images.restartIcon} />
                            </View>
                        </TouchableWithoutFeedback>
                        {
                            this.props.score >= this.props.level && <TouchableWithoutFeedback onPress={this.props.onNextLevel}>
                            <View style={styles.panelButton}>
                                <Image style={styles.panelButtonIcon} resizeMode="contain" source={Images.playIcon} />
                            </View>
                        </TouchableWithoutFeedback>
                        }
                    </View>
                </View>
            </View>
        );
    }
}
