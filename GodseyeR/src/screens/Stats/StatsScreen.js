import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const statsData = [
  // Add your stats data here, e.g.:
  // { name: 'Chastity', value: 10, abbreviation: 'CHA' },
  // { name: 'Faith', value: 10, abbreviation: 'FTH' },
];

const StatItem = ({ item }) => (
  <View style={styles.statItem}>
    <Text style={styles.statName}>{item.name}</Text>
    <Text style={styles.statValue}>{item.abbreviation}: {item.value}</Text>
  </View>
);

const StatsScreen = () => {
  return (
    <View style={styles.container}>
      {statsData.map((stat) => (
        <StatItem key={stat.abbreviation} item={stat} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  statName: {
    fontSize: 18,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StatsScreen;
