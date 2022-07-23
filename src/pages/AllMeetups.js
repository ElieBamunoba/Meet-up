<<<<<<< HEAD
import React from "react";
import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList"

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-meetup-app-project-2db04-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            return response.json();
        }).then(data => {

            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });

    }, []);


    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>

    }
    return <section>
        <h1> All Meetups Page</h1>
        <MeetupList meetups={loadedMeetups} />
    </section>
}

=======
import React from "react";
import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList"

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    //fetching
    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-meetup-app-project-2db04-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            return response.json();
        }).then(data => {

            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });

    }, []);


    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>

    }
    return <section>
        <h1> All Meetups Page</h1>
        <MeetupList meetups={loadedMeetups} />
    </section>
}

>>>>>>> 19b44308b026e8225c2503e4b99d9c819eaabab8
export default AllMeetupsPage;