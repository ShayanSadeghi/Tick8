import React from "react";
import {
  StyleSheet,
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
  let formikProps;
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
          {props => {
            formikProps = props;
            return (
              <View style={GlobalStyles.container}>
                <TextInput
                  value={props.values.question}
                  onChangeText={props.handleChange("question")}
                  placeholder="Question"
                  style={[GlobalStyles.regularText, GlobalStyles.inputText]}
                  onBlur={props.handleBlur("question")}
                />
                <Text style={[GlobalStyles.boldText, GlobalStyles.errorText]}>
                  {props.touched.question && props.errors.question}
                </Text>

                <TextInput
                  value={props.values.answer}
                  onChangeText={props.handleChange("answer")}
                  placeholder="Answer"
                  style={[GlobalStyles.regularText, GlobalStyles.inputText]}
                  onBlur={props.handleBlur("answer")}
                />
                <Text style={[GlobalStyles.boldText, GlobalStyles.errorText]}>
                  {props.touched.answer && props.errors.answer}
                </Text>
                <TextInput
                  multiline
                  minHeight={180}
                  value={props.values.example}
                  onChangeText={props.handleChange("example")}
                  placeholder="Ex"
                  style={[GlobalStyles.regularText, GlobalStyles.inputText]}
                />
              </View>
            );
          }}
        </Formik>
      </ScrollView>
      <View style={GlobalStyles.modalButtons}>
        <TouchableOpacity
          onPress={() => setModalOpen(false)}
          style={GlobalStyles.modalButtonClose}>
          <Text style={GlobalStyles.boldText}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => formikProps.handleSubmit()}
          style={GlobalStyles.modalButtonAdd}>
          <Text style={GlobalStyles.boldText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
