export let rerenderEntireTree = () => {
    console.log('state changed')
}


export type AddPostPropsType = {
    addPost: (postMessage: string) => void
}

export type OnChangePropsType = {
    onPostChange: (newText: string) => void
}

export type MessageDataType = {
    id: number
    text: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type PostDataType = {
    message: string
    count: number
    id: number
}
export type FriendDataType = {
    id: number
    name_friend: string
    img_friend: string
}

export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messageData: Array<MessageDataType>
}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    friendData: Array<FriendDataType>

}

export let State: StateType = { //добавляем к стейту типизацию
    profilePage: {
        postData: [{id: 1, message: 'Hi, how are you?', count: 20},
            {id: 2, message: 'What are you doing on Saturday?', count: 25},
            {id: 3, message: 'I miss...', count: 30}],
        newPostText: " ",
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Agafon'},
            {id: 3, name: 'Mitrofan'},
            {id: 4, name: 'Fedot'},
        ]
        ,
        messageData: [
            {id: 1, text: 'Hi!!!'},
            {id: 2, text: 'Have you done motorcycle repairs?'},
            {id: 3, text: 'We are flying to Odessa tomorrow!'},

        ]
    },

    friendData: [
        {
            id: 1,
            name_friend: 'Diogen Motogonych',
            img_friend: 'https://i.pinimg.com/236x/b3/01/e6/b301e6ea3e8b0632c158010d38d21a60.jpg'
        },
        {
            id: 2,
            name_friend: 'Eldar Speed',
            img_friend: 'https://i.pinimg.com/236x/74/48/ba/7448ba2658e5bbfc4ed29a1460da922f.jpg'
        },
        {
            id: 3,
            name_friend: 'Masha NeVasha',
            img_friend: 'https://i.pinimg.com/236x/01/fb/3a/01fb3a6472c506046457517b2f2d9a4a--cafe-racer-girl-biker-chick.jpg'
        },
    ]

};

export let addPost = (postMessage: string) => {
    const newPost: PostDataType = {id: new Date().getTime(), message: postMessage, count: 0};
    State.profilePage.postData.push(newPost);
    State.profilePage.newPostText = " "

    rerenderEntireTree();
}
export const onPostChange = (newText: string) => {
    State.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe=(collback:()=>void)=>{
rerenderEntireTree=collback;
}


