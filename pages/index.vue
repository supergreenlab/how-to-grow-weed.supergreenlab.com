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
  <div :class="$style.container">
    <div :id='$style.logo'>
      <Logo overtitle='how-to-grow-weed.' subtitle='.com'/>
    </div>
    <div><h3>COMING <span :id='$style.green'>SOON</span></h3></div>
  </div>
</template>

<script>
import Logo from '~/components/logo.vue'

export default {
  components: { Logo }
}
</script>

<style module lang=stylus>
.container
  margin: 0 auto
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  text-align: center

#logo
  font-size: 2em

#green
  color: #3bb30b
</style>
