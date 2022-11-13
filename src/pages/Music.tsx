import { Space, Stack, Text, Title } from "@mantine/core";

export function MusicPage() {
  return (
    <>
      <Title size="lg" pb="md">
        Music
      </Title>
      <Stack pl="md">
        <Text>
          I had a recital for friends and family in 2019 at Campbell Recital Hall.
        </Text>
        <iframe 
          width="560"
          height="560"
          scrolling="no"
          frameBorder="0"
          allow="autoplay"
          title="Masters Recital"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/797556120&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>

        <Space h="xl" />
        <Text>
          The Streetlights was band I formed with two fellow musicians (Jason Han and Josh Remba) at MIT Lincoln Laboratory.
        </Text>
        <iframe 
          width="560" 
          height="300" 
          scrolling="no" 
          frameBorder="0" 
          allow="autoplay" 
          title="The Streetlights"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/797624922&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>

        <Space h="xl" />
        <Text>
          I studied violin with Robin Sharp at Stanford University and got a Certificate in Violin Performance.
          The video below is a clip from my senior recital in 2015.
        </Text>
        <iframe 
          width="560"
          height="315" 
          src="https://www.youtube.com/embed/0TfoWKMkB5Y" 
          title="Elgar Sonata" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        >
        </iframe>
      </Stack>
    </>
  )
}