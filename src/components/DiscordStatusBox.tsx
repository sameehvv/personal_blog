import React, { useState, useEffect } from 'react';
import { Block } from './Block';
import { SiDiscord } from "react-icons/si";

export const DiscordStatusBox = () => {
  const [data, setData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const fetchDiscordData = async () => {
    try {
      const response = await fetch('https://api.lanyard.rest/v1/users/768415579761410059');
      if (!response.ok) throw new Error('Network not ok');
      const result = await response.json();
      setData(result.data);
      setHasError(false);
    } catch (error) {
      console.error('Error fetching Discord data:', error);
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchDiscordData();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    fetchDiscordData();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderContent = () => {
    if (hasError || !data) {
      return (
        <a
          href="https://discord.com/users/768415579761410059"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full h-full p-4"
        >
          <SiDiscord className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl" />
        </a>
      );
    }

    const { discord_user, discord_status } = data;
    const { username, avatar, id } = discord_user || {};
    const profileUrl = `https://discord.com/users/${id}`;

    const statusColor =
      discord_status === 'online'
        ? 'bg-green-500'
        : discord_status === 'dnd'
        ? 'bg-red-500'
        : discord_status === 'idle'
        ? 'bg-yellow-500'
        : 'bg-gray-400';
    const avatarUrl = avatar
      ? `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`
      : '';

    return (
      <div className="absolute inset-0 flex flex-row items-center justify-center gap-3 p-2 group overflow-hidden">
        <img
          src={avatarUrl}
          alt={username}
          className={`w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 shrink-0 rounded-full border-green-500 ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity`}
        />
        <div className={`text-white flex flex-col items-start justify-center min-w-0 ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm md:text-base lg:text-base font-mono truncate max-w-full"
          >
            {username || 'Unknown User'}
          </a>
          <div className="flex items-center mt-1">
            <div className={`w-2 h-2 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-3 lg:h-3 rounded-full ${statusColor}`} />
            <span className="ml-2 text-xs sm:text-sm md:text-sm lg:text-sm capitalize font-mono">{discord_status || 'unknown'}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Block
      className="col-span-2 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1 flex items-center justify-center p-4 relative bg-no-repeat group overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {renderContent()}
        {!hasError && data && (
          <SiDiscord
            className={`text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-zinc-100 transform transition-transform duration-300 ${
              isHovered ? 'scale-50 opacity-10' : 'scale-100 opacity-100'
            }`}
          />
        )}
      </div>
    </Block>
  );
};
