import React from "react";

import MeetupList from "../components/meetups/MeetupList"

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://stillmed.olympics.com/media/Images/OlympicOrg/News/2019/11/27/2019-11-27-paris-thumbnail.jpg?im=Resize=(2120,1200),aspect=fill',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://thepointsguy.global.ssl.fastly.net/us/originals/2021/05/Paris_traveltrestrictions.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetupsPage() {
    return <section>
        <h1> All Meetups Page</h1>
        <MeetupList meetups={DUMMY_DATA} />
    </section>

}

export default AllMeetupsPage;