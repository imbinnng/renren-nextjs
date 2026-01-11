import React, { useState } from 'react';
import Header from '../src/components/Header';
import PageHeader from '../src/components/PageHeader';
import FriendList from '../src/components/friends/FriendList';
import FriendSearch from '../src/components/friends/FriendSearch';
import { friendsData } from '../src/lib/friendsData';

const FriendsPage: React.FC = () => {
  const [filteredFriends, setFilteredFriends] = useState(friendsData);
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredFriends(friendsData);
      return;
    }
    
    const filtered = friendsData.filter(friend =>
      friend.name.toLowerCase().includes(query.toLowerCase()) ||
      friend.username.toLowerCase().includes(query.toLowerCase()) ||
      friend.bio.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFriends(filtered);
  };

  const handleMessage = (id: number) => {
    console.log('Send message to friend:', id);
  };

  const onViewProfile = (id: number) => {
    console.log('View friend profile:', id);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header currentPage="friends" />
      
      <div className="max-w-6xl mx-auto p-4">
        <PageHeader
          title="我的好友"
          subtitle={`${filteredFriends.length} 位好友`}
          actions={<FriendSearch onSearch={handleSearch} />}
        />
        
        <FriendList 
          friends={filteredFriends}
          onMessage={handleMessage}
          onViewProfile={onViewProfile}
        />
      </div>
    </div>
  );
};

export default FriendsPage;