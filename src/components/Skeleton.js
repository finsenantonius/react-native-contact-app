import React from "react";
import SkeletonContent from "react-native-skeleton-content";
import { StyleSheet } from "react-native";

export const SkeletonContact = ({ children, load }) => {
  return (
    <SkeletonContent
      isLoading={load}
      layout={[{ width: "100%", height: 82, marginVertical: 6 }]}
      containerStyle={styles.contact}
    >
      {children}
    </SkeletonContent>
  );
};

const styles = StyleSheet.create({
  contact: {
    marginTop: 8,
  },
});
