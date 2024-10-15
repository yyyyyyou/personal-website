import { Container, Heading, Divider, Text, Box, VStack, HStack, Icon } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { FaGraduationCap, FaBook } from 'react-icons/fa'

const CV = () => (
  <Layout title="CV">
    <Container maxW="container.md" py={6}>
      
      {/* Education Section */}
      <Section delay={0.1}>
        <HStack spacing={3} align="center">
          <Icon as={FaGraduationCap} boxSize={6} color="teal.500" />
          <Heading as="h3" fontSize={24} variant="section-title" color="teal.600">
            Education
          </Heading>
        </HStack>
        <VStack align="start" spacing={4} mt={4}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">University of Waterloo</Text>
            <Text>PhD in Computer Science</Text>
            <Text color="#6d758e">Waterloo, ON | Sep 2023 - Present</Text>
            <Text>Advisor: Dr. Jian Zhao</Text>
            <Text fontWeight="medium">GPA: 96.5/100</Text>
            <br/>
            <Text>Master of Mathematics (MMath) in Computer Science</Text>
            <Text color="#6d758e">Waterloo, ON | Sep 2021 - Aug 2023</Text>
            <Text>Advisor: Dr. Jian Zhao</Text>
            <Text fontWeight="medium">GPA: 93.75/100</Text>
          </Box>
          <Divider />
          <Box>
            <Text fontSize="lg" fontWeight="bold">University of Michigan - Ann Arbor</Text>
            <Text>Bachelor of Science (B.S.) in Computer Science</Text>
            <Text color="#6d758e">Ann Arbor, MI | Sep 2017 - May 2021</Text>
            <Text fontWeight="medium">GPA: 3.695/4.0</Text>
          </Box>
          <Divider />
          <Box>
            <Text fontSize="lg" fontWeight="bold">Rhode Island School of Design</Text>
            <Text>Pre-college Program, Art & Design</Text>
            <Text color="#6d758e">Providence, RI | July 2015 - Aug 2015</Text>
          </Box>
        </VStack>
      </Section>

      <Divider my={8} />

      {/* Publications Section */}
      <Section delay={0.2}>
        <HStack spacing={3} align="center">
          <Icon as={FaBook} boxSize={6} color="teal.500" />
          <Heading as="h3" fontSize={24} variant="section-title" color="teal.600">
            Publications
          </Heading>
        </HStack>
        <VStack align="start" spacing={4} mt={4}>
          <Box>
            <Text fontSize="md"><strong>Yuzhe You</strong> and Jian Zhao. <strong>Panda or Gibbon? A Beginner&apos;s Introduction to Adversarial Attacks</strong>. In <i>7th Workshop on Visualization for AI Explainability (VISxAI)</i>, IEEE VIS 2024.</Text>
          </Box>
          <Divider />
          <Box>
            <Text fontSize="md">Li Feng, Ryan Yen, <strong>Yuzhe You</strong>, Mingming Fan, Jian Zhao, and Zhicong Lu. <strong>CoPrompt: Supporting Prompt Sharing and Referring in Collaborative Natural Language Programming</strong>. In <i>Proceedings of the CHI Conference on Human Factors in Computing Systems</i>, CHI 2024.</Text>
          </Box>
          <Divider />
          <Box>
            <Text fontSize="md"><strong>Yuzhe You</strong>. <strong>AdvEx: Interactive Visual Explorations of Adversarial Evasion Attacks</strong>. Master&apos;s thesis, University of Waterloo, 2023.</Text>
          </Box>
        </VStack>
      </Section>

      <Divider my={8} />

    </Container>
  </Layout>
)

export default CV
export { getServerSideProps } from '../components/chakra'
