import { memo } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
// import { SharedElement } from "react-navigation-shared-element";

import { IMAGES_HOST } from "constants/api";

import { styles } from "./styles";

const Movie = ({ movie, onPress }) => {
  return (
    <TouchableOpacity
      onLongPress={() => {}}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.container}>
        <View style={styles.leftBlock}>
          {/* <SharedElement id={`item.${movie.title}.photo`}>
            <Image
              source={{ uri: `${IMAGES_HOST}/t/p/w200/${movie.poster_path}` }}
              style={styles.image}
            />
          </SharedElement> */}
          <Image
            source={{ uri: `${IMAGES_HOST}/t/p/w200/${movie.poster_path}` }}
            style={styles.image}
          />
        </View>
        <View style={styles.rightBlock}>
          <View style={styles.content}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
              {movie.title}
            </Text>
            <Text style={styles.text}>Рейтинг:</Text>
          </View>
          <View style={styles.voteContainer}>
            <Text style={styles.voteLabel}>{movie.vote_average} из 10</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Movie);
