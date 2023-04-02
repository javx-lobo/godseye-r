import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { VictoryPie } from 'victory-native';

const HomeScreen = () => {
  const data = [
    { x: 'CHA', y: 10 },
    { x: 'FTH', y: 20 },
    { x: 'TMP', y: 30 },
    { x: 'GEN', y: 40 },
    { x: 'DIL', y: 50 },
    { x: 'CON', y: 60 },
    { x: 'PAT', y: 70 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.statsSection}>
          <Text style={styles.title}>Soul Score: 350</Text>
          <Text style={styles.subtitle}>Rank: Disciple</Text>
          <VictoryPie
            data={data}
            width={300}
            height={300}
            padding={30}
            labelRadius={({ innerRadius }) => innerRadius + 125}
            style={{
              labels: {
                fontSize: 12,
                padding: 12,
                fill: 'black',
              },
            }}
            colorScale={['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'skyblue']}
          />
        </View>

        <View style={styles.actionsSection}>
          <Text style={styles.title}>Actions</Text>
          {/* Render the list of actions here */}
        </View>

        <View style={styles.rewardsSection}>
          <Text style={styles.title}>Rewards</Text>
          {/* Render the list of rewards here */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statsSection: {
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  actionsSection: {
    padding: 20,
    backgroundColor: '#fff',
  },
  rewardsSection: {
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HomeScreen;
