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
   <div class='tipcard'>
     <div class='tiptitle'>
       <h2>{{ tip.article.title }}</h2>
     </div>
     <div class='tipbody'>
       <div class='tipimg'></div>
       <div class='tiptext'>
         <div class='tipintro'>
           <Markdown>
             {{ tip.article.intro.text }}
           </Markdown>
         </div>
         <div class='tipbuttons'>
           <a :href='`/tip/${link}`'>read more</a>
         </div>
       </div>
     </div>
   </div>
 </template>

<script>
import Markdown from 'vue-markdown'

export default {
  components: { Markdown, },
  props: ['tip'],
  computed: {
    link() {
      const c = this.$props.tip.name.split('_')
      c.shift()
      return c.join('_')
    }
  }
}
</script>

<style lang=stylus>
.tipcard
  max-width: 600pt
  margin: 30pt 20pt
  background-color: white

.tiptitle
  border: 3px solid #dedede 
  border-bottom: none
  border-radius: 5pt 5pt 0 0
  padding: 10pt 20pt 5pt

.tipbody
  display: flex
  border: 3px solid #dedede 
  border-top: 1px solid #dedede 
  border-radius: 0 0 5pt 5pt
  padding: 30pt 20pt 10pt

.tipimg
  min-width: 120pt
  height: 100pt
  margin: 0 20pt 10pt 0
  border-radius: 5pt
  background-color: #ababab
  background-position: center
  background-size: cover
  background-repeat: no-repeat

.tiptext
  display: flex
  flex-direction: column
  font-size: 1.1em

.tipintro
  flex: 1

.tipbuttons
  display: flex
  flex-direction: row-reverse
</style>
