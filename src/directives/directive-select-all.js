export const selectAll = {
  inserted(el) {
		el.addEventListener('focus', () => {
			if (el.value.length) {
				el.select()
			}
		})
  }
}