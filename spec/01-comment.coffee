describe 'Comment Tag', ->
  tpl = null
  ret = null

  beforeEach ->
    tpl = new Beard()
    tpl.set '<%# This is comment %>'
    ret = tpl.render()

  afterEach ->
    tpl = null

  it 'should return nothing', ->
    expect(ret).toEqual ''
