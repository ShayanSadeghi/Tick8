import React from "react";
import { View, Text, TextInput } from "react-native";
import { Formik } from "formik";
import { GlobalStyles } from "../styles/global";

export default function CardForm({ addCard }) {
  return (
    <View>
      <Formik
        initialValues={{ question: "", answer: "", example: "" }}
        onSubmit={values => {
          addCard(values);
        }}>
        {props => (
          <View>
            <TextInput
              value={props.values.question}
              onChangeText={props.handleChange("question")}
              placeholder="Question"
              style={GlobalStyles.inputText}
            />
            <TextInput
              value={props.values.answer}
              onChangeText={props.handleChange("answer")}
              placeholder="Answer"
              style={GlobalStyles.inputText}
            />
            <TextInput
              multiline
              minHeight={180}
              value={props.values.example}
              onChangeText={props.handleChange("example")}
              placeholder="Ex"
              style={GlobalStyles.inputText}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
