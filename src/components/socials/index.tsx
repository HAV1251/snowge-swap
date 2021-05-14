import * as React from "react"
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import styled from 'styled-components'
import discordIcon from "./discord.svg";
import twitterIcon from "./twitter.svg";
import telegramIcon from "./telegram.svg";
import redditIcon from "./reddit.svg";
import mediumIcon from "./medium.svg";
import youtubeIcon from "./youtube.svg";
import githubIcon from "./github.svg";
import twitchIcon from "./twitch.svg";

const Socials = () => {

    const SocialWrapper = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    `;

    return (
        <SocialWrapper>
            <Tooltip title="Twitter" enterDelay={600}>
                <IconButton aria-label="Twitter" href="https://twitter.com/snowgecoin" target="_blank"
                            style={{color: '#FFFFFF'}}>
                    <img src={twitterIcon} alt='twitter logo' height={18} width={18}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Telegram" enterDelay={600}>
                <IconButton aria-label="Telegram" href="http://t.me/snowgecoin" target="_blank" style={{color: '#FFFFFF'}}>
                    <img src={telegramIcon} alt='telegram logo' height={18} width={18}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Discord" enterDelay={600}>
                <IconButton aria-label="Discord" href="https://discord.gg/qy3ymqazeJ" target="_blank"
                            style={{color: '#FFFFFF'}}>
                    <img src={discordIcon} alt='discord logo' height={18} width={18}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Reddit" enterDelay={600}>
                <IconButton aria-label="Reddit" href="https://www.reddit.com/r/SnowgeCoin/" target="_blank"
                            style={{color: '#FFFFFF'}}>
                    <img src={redditIcon} alt='reddit logo' height={18} width={18}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Medium" enterDelay={600}>
                <IconButton aria-label="Medium" href="https://snowgecoin.medium.com" target="_blank"
                            style={{color: '#FFFFFF'}}>
                    <img src={mediumIcon} alt='medium logo' height={18} width={18}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Youtube" enterDelay={600}>
                <IconButton aria-label="Youtube" href="https://www.youtube.com/channel/UCYXES0sbHwh6xvwA6sRtONQ" target="_blank"
                            style={{color: '#FFFFFF'}}>
                    <img src={youtubeIcon} alt='youtube logo' height={18} width={18}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Github" enterDelay={600}>
                <IconButton aria-label="Github" href="https://github.com/snowgecoin" target="_blank"
                            style={{color: '#FFFFFF'}}>
                    <img src={githubIcon} alt='github logo' height={18} width={18}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Twitch" enterDelay={600}>
                <IconButton aria-label="Twitch" href="https://twitch.tv/snowgegaming" target="_blank"
                            style={{color: '#FFFFFF'}}>
                    <img src={twitchIcon} alt='twitch logo' height={18} width={18}/>
                </IconButton>
            </Tooltip>
        </SocialWrapper>
    )
};

export default Socials
