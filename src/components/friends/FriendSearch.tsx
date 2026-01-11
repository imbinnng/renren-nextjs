import React, { useState } from 'react';
import Input from '../ui/input';

interface FriendSearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export default function FriendSearch({ onSearch, placeholder = "搜索好友..." }: FriendSearchProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={query}
      onChange={(e) => handleSearch(e.target.value)}
      className="w-full max-w-xs"
    />
  );
}