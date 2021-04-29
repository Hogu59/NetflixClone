import React from 'react';
import { Text, View } from '../../components/Themed';
import {Image} from 'react-native';
import styles from './styles';

import movie from '../../assets/data/movie';

const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={{ uri: firstEpisode.poster}}/>
        </View>
    )
};

export default MovieDetailsScreen;
