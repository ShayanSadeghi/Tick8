import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import { GlobalStyles } from "../styles/global";

const formSchema = yup.object({
  question: yup.string().required().min(1),
  answer: yup.string().required().min(1),
});

export default function CardForm({ addCard, setModalOpen }) {
  return (
    <View style={GlobalStyles.container}>
      <ScrollView>
        <Formik
          initialValues={{ question: "", answer: "", example: "" }}
          validationSchema={formSchema}
          onSubmit={(values, actions) => {
            addCard(values);
            actions.resetForm();
          }}>
          {props => (
            <View style={GlobalStyles.container}>
              <TextInput
                value={props.values.question}
                onChangeText={props.handleChange("question")}
                placeholder="Question"
                style={GlobalStyles.inputText}
              />
              <Text style={GlobalStyles.errorText}>
                {props.touched.question && props.errors.question}
              </Text>

              <TextInput
                value={props.values.answer}
                onChangeText={props.handleChange("answer")}
                placeholder="Answer"
                style={GlobalStyles.inputText}
              />
              <Text style={GlobalStyles.errorText}>
                {props.touched.question && props.errors.answer}
              </Text>
              <TextInput
                multiline
                minHeight={180}
                value={props.values.example}
                onChangeText={props.handleChange("example")}
                placeholder="Ex"
                style={GlobalStyles.inputText}
              />
              <View style={GlobalStyles.modalButtons}>
                <TouchableOpacity
                  onPress={() => setModalOpen(false)}
                  style={GlobalStyles.modalButtonClose}>
                  <Text>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.handleSubmit()}
                  style={GlobalStyles.modalButtonAdd}>
                  <Text>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
