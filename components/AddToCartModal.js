import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

export default function AddToCartModal({ modalVisible }) {
    return (
          <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
            </View>
            </View>
          </Modal>
        
      );
};