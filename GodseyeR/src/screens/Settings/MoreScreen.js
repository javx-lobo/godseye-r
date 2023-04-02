import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const moreOptionsData = [
  // Add your more options data here, e.g.:
  // { id: '1', name: 'Financial Tracking', navigation: 'FinancialTrackingScreen' },
  // { id: '2', name: 'Workout Module', navigation: 'WorkoutModuleScreen' },
  // { id: '3', name: 'Settings', navigation: 'SettingsScreen' },
  // { id: '4', name: 'User Profile', navigation: 'UserProfileScreen' },
];

const MoreOptionItem = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.optionItem}
    onPress={() => navigation.navigate(item.navigation)}
  >
    <Text style={styles.optionName}>{item.name}</Text>
  </TouchableOpacity>
);

const MoreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={moreOptionsData}
        renderItem={({ item }) => <MoreOptionItem item={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    flexGrow: 1,
    padding: 20,
  },
  optionItem: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  optionName: {
    fontSize: 18,
  },
});

export default MoreScreen;
