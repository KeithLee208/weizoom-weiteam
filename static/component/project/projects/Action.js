/**
 * Copyright(c) 2012-2016 weizoom
 */
"use strict";

var debug = require('debug')('m:outline.datas:Action');
var _ = require('underscore');

var Reactman = require('reactman');
var Dispatcher = Reactman.Dispatcher;
var Resource = Reactman.Resource;

var Constant = require('./Constant');

var Action = {
	deleteProject: function(id) {
		Resource.delete({
			resource: 'project.project',
			data: {
				id: id
			},
			dispatch: {
				dispatcher: Dispatcher,
				actionType: Constant.PROJECT_PROJECTS_DELETE_PROJECT
			}
		});
	},

	starProject: function(project) {
		Resource.put({
			resource: 'project.stared_project',
			data: {
				id: project.id
			},
			dispatch: {
				dispatcher: Dispatcher,
				actionType: Constant.PROJECT_PROJECTS_STAR_PROJECT,
				data: {
					project: project
				}
			}
		})
	}
};

module.exports = Action;