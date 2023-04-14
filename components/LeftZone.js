import Head from 'next/head'

export default function LeftZone() {

  const menuButton = (assetName, title) => {
    return <div className='menuButtonBox'>
        <div className='menuImageContainer'>
            <img src={assetName}/>
            <p className='menuTitle'>{title}</p>
        </div>
    </div>
  }

  return (
    <div className='leftZone'>
        <div className='twitterLogoBox'>
            <img src='/assets/twitter-icon.svg' className='twitterLogo'/>
        </div>
        {menuButton('/assets/menu-home.svg', 'Home')}
        {menuButton('/assets/menu-explore.svg', 'Explore')}
        {menuButton('/assets/menu-notifications.svg', 'Notifications')}
        {menuButton('/assets/menu-messages.svg', 'Messages')}
        {menuButton('/assets/menu-bookmarks.svg', 'Bookmarks')}
        {menuButton('/assets/menu-twitter-blue.svg', 'Twitter Blue')}
        {menuButton('/assets/menu-profile.svg', 'Profile')}
        {menuButton('/assets/menu-more.svg', 'More')}
        <button className='menuTweetButton'>
            <p>Tweet</p>
            <img className='menuTweetImage' src='/assets/menu-tweet-action.svg'/>
        </button>
    </div>
  )
}
