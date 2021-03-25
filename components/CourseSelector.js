import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import Course from './Course';
import { hasConflict } from '../utils/course';


const CourseSelector = ({allCourses, courses, view}) => {
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        setSelected(selected => (
            selected.filter(x => allCourses.includes(x))
        ));
    }, [allCourses]);

    const toggle = course => setSelected(selected => (
        selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
    ));

    return (
        <View style={styles.courseList}>
            {
                courses.map(course => (
                    <Course key={course.id} 
                            course={course} 
                            select={toggle}
                            isSelected={selected.includes(course)} 
                            isDisabled={hasConflict(course, selected)}
                            view={view} />
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default CourseSelector