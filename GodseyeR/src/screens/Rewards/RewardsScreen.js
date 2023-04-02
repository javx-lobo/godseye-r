import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const rewardsData = [
  // Add your rewards data here, e.g.:
  // { id: '1', name: 'Reward 1', requirements: 'FTH: 50, CHA: 30' },
  // { id: '2', name: 'Reward 2', requirements: 'TMP: 80, GEN: 40' },
];

const RewardItem = ({ item }) => (
  <View style={styles.rewardItem}>
    <Text style={styles.rewardName}>{item.name}</Text>
    <Text style={styles.rewardRequirements}>Requirements: {item.requirements}</Text>
  </View>
);

const RewardsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={rewardsData}
        renderItem={({ item }) => <RewardItem item={item} />}
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
  rewardItem: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  rewardName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rewardRequirements: {
    fontSize: 16,
  },
});

export default RewardsScreen;
