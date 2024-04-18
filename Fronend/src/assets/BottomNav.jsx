import React from 'react'

const BottomNav = () => {
  return (
    <div>
        <div className=' bottom-0 '>
        <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
          />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<GroupOutlined />}
          />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<ArchiveIcon />}
          />
        <BottomNavigationAction label="Folder" value="folder" icon={<AccountCircle />} />
      </BottomNavigation>
          </div>
    </div>
  )
}

export default BottomNav