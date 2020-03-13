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
    <div v-if='section.title' :id='$style.title'>
      <h2>{{ section.title }}</h2>
    </div>
    <div :id='$style.body'>
      <div :id='$style.img'></div>
      <div :id='$style.text'>
        <Markdown :id='$style.intro' :source='section.text'>
        </Markdown>
        <div :id='$style.buttons'>
        </div>
      </div>
    </div>
    <div :id='$style.subsections'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Markdown from 'vue-markdown'

export default {
  components: { Markdown, },
  props: ['sub', 'section'],
}
</script>

<style module lang=stylus>

#container
  display: flex
  flex-direction: column

#title
  padding: 0 20pt
  color: #555555
  border-bottom: 3px solid #dedede 

#body
  display: flex
  margin: 30pt 20pt

#img
  min-width: 120pt
  height: 100pt
  margin: 0 20pt 10pt 0
  border-radius: 5pt
  background-color: #ababab
  background-position: center
  background-size: cover
  background-repeat: no-repeat

#text
  display: flex
  flex-direction: column

#buttons
  display: flex
  flex-direction: row-reverse

</style>
