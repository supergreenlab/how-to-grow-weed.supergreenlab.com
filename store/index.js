/*
 * Copyright (C) 2020  SuperGreenLab <towelie@supergreenlab.com>
 * Author: Constantin Clauzel <constantin.clauzel@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const SERVER_URL = 'https://tipapi.supergreenlab.com';
//const SERVER_URL = 'http://localhost:8080';

export const state = () => ({
  user: 'supergreenlab',
  repo: 'SuperGreenTips',
  branch: 'master',
  loadedPages: [], /*
  {
    from: Number,
    to: Number,
    loaded: Bool,
    tips: [ServerStruct],
  }
*/
})

export const mutations = {
  setTipPage(state, page) {
    state.loadedPages.push(page);
  }
}

export const actions = {
  async loadTipPage(context, { from, to }) {
    const { tips } = await this.$axios.$get(`${SERVER_URL}/t/supergreenlab/SuperGreenTips/master/l/en`, { params: { from, to } })
    context.commit('setTipPage', { from, to, tips, loaded: true })
    return tips.length
  }
}
