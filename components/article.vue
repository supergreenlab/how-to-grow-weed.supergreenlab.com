<!--
      Copyright (C) 2020  SuperGreenLab <towelie@supergreenlab.com>
      Author: Constantin Clauzel <constantin.clauzel@gmail.com>

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.

      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.

      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <http://www.gnu.org/licenses/>.
 -->

<template>
  <div :id='$style.container'>
    <div :class='$style.titlecontainer'>
      <h1>{{ tip.article.title }}</h1>
    </div>
    <Section :section='tip.article.intro' :tip='tip' />
    <div :id='$style.body'>
      <Section v-for='section in tip.article.sections' :section='section' :key='section.name' :tip='tip'>
        <Section :key='subSection.name' v-for='subSection in section.subSections' :section='subSection' :sub='true' :tip='tip' />
      </Section>
    </div>
  </div>
</template>

<script>
import Section from '~/components/section.vue'

export default {
  props: ['tip'],
  components: { Section },
}
</script>

<style module lang=stylus>

#container
  display: flex
  flex-direction: column
  width: 100%
  margin: 0 auto
  min-height: 100vh
  overflow-y: hidden
  background-color: white

.titlecontainer
  padding: 0 20pt
  color: #555555
  border-bottom: 3px solid #dedede 

</style>
