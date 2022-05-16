import { useState, useEffect } from 'react'
import { firebase } from '../firebase'
import { collatedTasksExist } from '../helpers';
import moment from 'moment';

const collatedTasksExist = () => {};

export const useTasks = selectedProject =>{
    const [tasks, setTasks] = useState([]);

    useEffect( () =>{
     let unsubscribe = firebase
     .firebase()
     .collection('tasks')
     .where('userId', '==', 'user01');

     unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ? //choose selected project and if it does not exist
     (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))      //then check through where projectID is equal to selectedProject
     : selectedProject === 'TODAY'                                              //check if that task is today
     ? (unsubscribe = unsubscribe.where(
         'date',
         '==',
         moment().format('DD/MM/YYYY') //date format
     ))
     :selectedProject === 'INBOX' || selectedProject === 0
     ?(unsubscribe = unsubscribe.where('date', '==',''))
    : unsubscribe;

        unsubscribe = unsubscribe.onSnapShot(snapshot =>{
            const newTasks = snapshot.docs.map(task => ({
                id: task.id,
                ...task.data()
            }))
            //Calling hooks
            setTasks(
            selectedProject === 'NEXT_7'
            ? newTasks.filter(
                task => moment(task.date, 'DD-MM-YYY').diff(moment(), 'days') <= 7 &&
                task.archived !== true
            )
            :newTasks.filter(task => task.archived !== true)
            //one month
            ? selectedProject === 'MONTH'
            : newTasks.filter(
                task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'month') <= 30 &&
                task.archived !== false
            )
        );
        });

    
    }, [ selectedProject ]);
}